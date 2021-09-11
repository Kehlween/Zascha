import { styled } from '@material-ui/core/styles';
import { List, ListItemText, Avatar, Divider } from '@material-ui/core';

export const GradientBackground = styled('section')`
    background: ${({ theme }) =>
        'linear-gradient(180deg, ' +
        theme.palette.secondary.main +
        ' 0%, ' +
        theme.palette.primary.main +
        ' 100%)'};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    padding-bottom: ${({ theme }) => theme.spacing(20)};
`;

export const SectionTitle = styled('h2')`
    position: relative;
    text-align: center;
    font-size: ${({ theme }) => theme.typography.h6.fontSize};
    font-weight: normal;
    margin: 0;
    padding: ${({ theme }) => theme.spacing(7) + ' 0 ' + theme.spacing(4)};
    &::after {
        content: '';
        position: absolute;
        width: 44px;
        height: 2px;
        background-color: currentColor;
        bottom: ${({ theme }) => theme.spacing(2)};
        left: 50%;
        transform: translateX(-50%);
    }

    ${({ theme }) => theme.breakpoints.up('md')} {
        font-size: ${({ theme }) => theme.typography.h5.fontSize};
        padding: ${({ theme }) =>
            theme.spacing(15) + ' 0 ' + theme.spacing(13)};
        &::after {
            bottom: ${({ theme }) => theme.spacing(10)};
        }
    }
`;