import { ThemeProvider } from '@material-ui/core/styles';
import FacebookIcon from "@material-ui/icons/Facebook";
import GetAppIcon from "@material-ui/icons/GetApp";
import ShareIcon from "@material-ui/icons/Share";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkIcon from '@material-ui/icons/Link';
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import React from "react";
import { colors } from '../../../cookedStyles.js';
import { useStyles } from './ShareDialStyle';
import RecipePDF from '../../RecipePDF/RecipePDF.js';
import { PDFDownloadLink} from '@react-pdf/renderer';



const ShareDial = ({data}) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const actions = [
		{ icon: (
			<PDFDownloadLink document={<RecipePDF data={data}/>} fileName={`${data.title}.pdf`} style={{alignItems: "center", justifyContent: "center", textDecoration: "none", color: "#757575"}}>
				<GetAppIcon />
			</PDFDownloadLink>
		), name: "Baixar receita" },
		{ icon: <LinkIcon />, name: "Copiar link", handeClick: () => {navigator.clipboard.writeText(window.location.href)} },
		{ icon: <TwitterIcon />, name: "Twitter", handeClick: () => {window.open(`https://twitter.com/share?text=Check out this recie I found on Cooked!&amp;url=${window.location.href}`,'Twitter-dialog','width=626,height=436'); return false;} },
		{ icon: <FacebookIcon />, name: "Facebook", handeClick: () => {window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(window.location.href),'facebook-share-dialog','width=626,height=436'); return false;} },
	];
	const handleClose = () => {
		setOpen(false);
	};
	const handleOpen = () => {
		setOpen(true);
	};
	return (
		<ThemeProvider theme={colors}>
			<SpeedDial
				ariaLabel="Share"
				className={classes.speedDial}
				icon={<ShareIcon />}
				onClose={handleClose}
				onOpen={handleOpen}
				open={open}
				direction="up"
				>
				{actions.map((action) => (
					<SpeedDialAction
					key={action.name}
					icon={action.icon}
					tooltipTitle={action.name}
					onClick={action.handeClick}
					/>
				))}
			</SpeedDial>
		</ThemeProvider>
	);
};

export default ShareDial;
