export enum StudentLevel {
    BEGINNER,
    ADVANCED
}
export class Lesson {
    // id: string;
    // constructor(
    //     public title: string = '',
    //     public duration: number = 0,
    //     public description: string = '',
    //     private _level: StudentLevel = StudentLevel.BEGINNER) {}
    // set level(level: string) {
    //     console.log('setting lesson level...');
    //     this._level = StudentLevel[level];
    // }
    id: string;
    constructor(
        public title: string = '',
        public duration: number = 0,
        public description: string = '',
        private _level: StudentLevel = StudentLevel.BEGINNER) {}
    set level(level: string) {
        console.log('setting lesson level...');
        this._level = StudentLevel[level];
    }
    get level() {
        return StudentLevel[this._level];
    }
}
