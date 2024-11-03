export class Article {
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get score(): number {
        return this._score;
    }
    public set score(value: number) {
        this._score = value;
    }
    public get description(): String {
        return this._description;
    }
    public set description(value: String) {
        this._description = value;
    }
    public get date(): string {
        return this._date;
    }
    public set date(value: string) {
        this._date = value;
    }
    public get photo(): string {
        return this._photo;
    }
    public set photo(value: string) {
        this._photo = value;
    }
    public get titre(): string {
        return this._titre;
    }
    public set titre(value: string) {
        this._titre = value;
    }
    constructor ( 
        private _id: number ,
        private _titre: string ,
        private _photo: string ,
        private _date: string,
        private _description: String,
        private _score: number
    ){}
}
