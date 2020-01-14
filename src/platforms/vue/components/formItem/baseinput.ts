export default {
    name: 'baseinput',
    inheritAttrs: false,
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
    computed: {
        cMaxlength() {
            return this.model.getValidatorData(this.attr, 'string', 'max') || this.maxlength;
        }
    },
    template: `<component :is="tag" :name="attr" :value="model[attr]" :placeholder="model.getAttributeHint(attr)" v-on="inputListeners" :maxlength="cMaxlength" v-bind="$attrs"></component>
    `,
};
