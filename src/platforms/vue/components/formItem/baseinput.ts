export default {
    name: 'baseinput',
    props: {
        tag: {
            type: String,
            default: 'input',
        },
        model: {
            type: Object,
        },
        attr: {
            type: String,
        },
        checkValue: {
            type: Function,
            default() {},
        },
        inputListeners: {
            type: Object,
            default() {
                return {};
            },
        },
        maxlength: {
            type: [Number, String],
            default: 99999
        }
    },
    template: `<component :is="tag" :name="attr" :value="model[attr]" :placeholder="model.getAttributeHint(attr)" v-on="inputListeners" :maxlength="model.getValidatorData(attr, 'string', 'max') || maxlength"></component>
    `,
};
