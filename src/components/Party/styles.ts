import { makeStyles } from '@material-ui/core/styles'

export const usePartyStyles = (
    rickData: string | undefined,
    mortyData: string | undefined
) =>
    makeStyles(({ breakpoints }) => ({
        root: {
            width: '100%',
            backgroundColor: '#FFF',
            padding: '20px 0',
            [breakpoints.down(310)]: {
                position: 'relative',
            },
            '& > p:first-of-type': {
                textAlign: 'center',
                textTransform: 'uppercase',
                fontWeight: 600,
                fontSize: 25,
            },
        },
        slotsWrapper: {
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '45%',
            margin: 'auto',
            [breakpoints.down(1800)]: {
                width: '70%',
            },
            [breakpoints.down(1200)]: {
                width: '100%',
            },
            [breakpoints.down(440)]: {
                justifyContent: 'center',
            },
            '& > div': {
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                backgroundColor: '#CCC',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: 200,
                height: 250,
                [breakpoints.down(310)]: {
                    marginBottom: 10,
                },
                '& > p': {
                    color: '#FFF',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    paddingBottom: '20px',
                },
            },
        },
        rickSlot: {
            backgroundImage: `url(${rickData})`,
        },
        mortySlot: {
            backgroundImage: `url(${mortyData})`,
        },
    }))
