import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        fontColor: { control: 'color' },
    },
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args= {
    size: 'normal',
    color: 'primary'
}
export const AllCaps = Template.bind({});
AllCaps.args= {
    size: 'normal',
    allCaps: true
}
export const Secondary = Template.bind({});
Secondary.args= {
    size: 'normal',
    color: 'secondary'
}
export const Tertiary = Template.bind({});
Tertiary.args= {
    size: 'normal',
    color: 'tertiary'
}