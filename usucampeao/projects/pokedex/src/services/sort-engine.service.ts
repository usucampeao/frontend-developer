export class SortEngineService {


    constructor(
    ) { }

    public static sort(arrayList: any) {
        return arrayList.sort((a: any, b: any) => {
            if (a.id > b.id) {
                return 1;
            }
            if (a.id < b.id) {
                return -1;
            }
            return 0;
        })
    }

    public static sortDirection(arrayList: any, ascDirection: boolean) {
        return arrayList.sort((a: any, b: any) => {
            if ((a.id < b.id && ascDirection) || (a.id > b.id && !ascDirection)) {
                return 1;
            }
            if ((a.id > b.id && ascDirection) || (a.id < b.id && !ascDirection)) {
                return -1;
            }
            return 0;
        })
    }
}
