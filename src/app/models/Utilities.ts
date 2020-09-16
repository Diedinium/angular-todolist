export class Utilities {
    static isBlank(str):boolean {
        return (!str || /^\s*$/.test(str));
      }
      
    static isWhitespace(str):boolean {
    return (str.length === 0 || !str.trim());
    }
}