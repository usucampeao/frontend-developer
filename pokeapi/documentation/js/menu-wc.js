'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">pokeapi documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b269e75768470a748dbfd597311ce885"' : 'data-target="#xs-components-links-module-AppModule-b269e75768470a748dbfd597311ce885"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b269e75768470a748dbfd597311ce885"' :
                                            'id="xs-components-links-module-AppModule-b269e75768470a748dbfd597311ce885"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BeedrilComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BeedrilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlastoiseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlastoiseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BulbasaurComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BulbasaurComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ButterfreeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ButterfreeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CaterpieComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CaterpieComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChamanderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChamanderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CharizardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CharizardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CharmeleonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CharmeleonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IvysaurComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IvysaurComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KakunaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">KakunaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MetapoidComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MetapoidComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PidgeotComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PidgeotComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PidgeottoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PidgeottoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PidgeyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PidgeyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RaticateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RaticateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RattataComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RattataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SquitleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SquitleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VenusaurComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VenusaurComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WatortleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WatortleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WeedleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WeedleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});