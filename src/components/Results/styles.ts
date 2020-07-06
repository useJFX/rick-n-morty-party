import { makeStyles } from '@material-ui/core/styles'

export const useResultsStyles = makeStyles({
    resultWrapper: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageWrapper: {
        width: 200,
        height: 250,
        margin: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
    },
    progressWrapper: {
        width: '100%',
        minHeight: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    crossButton: {
        position: 'absolute',
        top: 2,
        right: 2,
        backgroundColor: '#FFF',
        fontSize: 12,
        '&:hover': {
            backgroundColor: '#FFF',
        },
    },
})
