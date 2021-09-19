import Button from './Button.vue';


export default {
    component: Button,
    title: 'Components/Button'
}

const Template = (args) => {

    return {
        components: { Button },
        setup() {
            return {
                args: {
                    ...args
                }
            }
        },
        template: '<Button v-bind={args} />'
    }
}


export const ButtonComponent = Template.bind({});

ButtonComponent.args = {
    label: 'Press me',
    style: {
        fontSize: '30px',
        backgroundColor: 'red'
    }
}