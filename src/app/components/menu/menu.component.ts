import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, AfterViewInit {
  private wasInside = false;

  @ViewChild('menuZin') menuZin: ElementRef;
  @ViewChild('menuZao') menuZao: ElementRef;
  @ViewChild('pokeBall') pokeBall: ElementRef;
  constructor(private deviceService: DeviceDetectorService) {
    this.getDeviceInfo();
  }

  isMobile = false;
  enabled = false;
  deviceInfo = null;
  content: any;
  menuOpen = false;

  getDeviceInfo() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.enabled = true;
  }

  toggleMenu() {
    if (this.enabled === true) {
      this.content = document.querySelector('.content');
      const menuZin = this.menuZin.nativeElement;
      const menuZao = this.menuZao.nativeElement;
      const pokeball = this.pokeBall.nativeElement;

      if (this.menuOpen && this.isMobile) {
        menuZin.className = 'slide close';
        menuZao.className = 'menu slide close';
        pokeball.className = 'slide pokeball animated rotateOut';
        this.content.classList.remove('open');
        this.content.classList.add('close');
        this.menuOpen = false;
      }

      // pokeBall animation
      if (pokeball.className === 'slide pokeball') {
        pokeball.className = 'slide pokeball animated rotateIn';
      } else {
        if (pokeball.className === 'slide pokeball animated rotateIn') {
          pokeball.className = 'slide pokeball animated rotateOut';
        } else {
          pokeball.className = 'slide pokeball animated rotateIn';
        }
      }
      // mobile navBar and web menu links
      if (menuZin.className === 'slide open') {
        menuZin.className = 'slide close';
      } else {
        menuZin.className = 'slide open';
      }
      // top menu with logo and matinhodéx title
      if (
        menuZao.className === 'menu slide' ||
        menuZao.className === 'menu slide open'
      ) {
        if (menuZao.className === 'menu slide open') {
          menuZao.className = 'menu slide close';
        } else {
          menuZao.className = 'menu slide open';
        }
      } else {
        menuZao.className = 'menu slide open';
      }

      // content stuff
      if (this.content.classList.contains('open')) {
        this.content.classList.remove('open');
        this.content.classList.add('close');
      } else {
        this.content.classList.remove('close');
        this.content.classList.add('open');
      }
      this.menuOpen = !this.menuOpen;
    }
  }

  @HostListener('click')
  clickIn() {
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickOut() {
    if (!this.wasInside && this.isMobile && this.menuOpen) {
      this.toggleMenu();
    }
    this.wasInside = false;
  }
}
