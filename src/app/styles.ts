import { makeStyles } from '@material-ui/core/styles'

export const useAppStyles = makeStyles(({ breakpoints }) => ({
    root: {
        width: '50%',
        height: '100%',
        paddingTop: 50,
        margin: 'auto',
        [breakpoints.down(800)]: {
            width: '95%',
        },
    },
}))
