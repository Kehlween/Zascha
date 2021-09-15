import { ComponentMeta, ComponentStory } from '@storybook/react';

import UserInformation from './UserInformation';

export default {
    title: 'data-display/UserInformation',
    component: UserInformation,
    argTypes: {},
} as ComponentMeta<typeof UserInformation>;

const Template: ComponentStory<typeof UserInformation> = (args) => (
    <UserInformation {...args} />
);

export const Default = Template.bind({});
Default.args = {
    name: 'Kehlween Wirmond',
    picture: 'https://github.com/kehlween.png',
    rating: 4,
    description: 'Web Developer',
    isRating: true,
};
