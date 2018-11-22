import BaseObject from "../base/BaseObject";
import Model from "../base/Model";
import * as lodash from "lodash";

export default abstract class Validator extends BaseObject
{
    public attribute:string;
    public type:string;
    public options:object;

    constructor(attribute:string, type:string, options:object){
        super();
        this.attribute = attribute;
        this.type = type;
        //默认所有的带pattern名的参数，且以/开头的字符串都认为是正则表达式
        for(const key in options) {
            const p = /pattern/i;
            if(p.test(key) && typeof(options[key]) === "string" && options[key][0] === "/") {
                options[key] = eval(options[key]);
            }
        }
        this.options = options;
    }

    abstract validateAttribute(model:Model):void;
}