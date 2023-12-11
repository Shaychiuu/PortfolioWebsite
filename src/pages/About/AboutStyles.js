// AboutStyles.js
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

export const StyledText = styled(Typography)({
  color: 'white',
  fontSize: '38px',
  fontWeight: 'bold',
  fontFamily: "'Playfair Display', serif", // Apply the Google Font here
});

export const StyledTextSmall = styled(Typography)({
  color: 'white',
  fontSize: '28px',
  fontWeight: 'bold',
  fontFamily: "'Playfair Display', serif", // Apply the Google Font here
});

export const LowerStyledText = styled(Typography)({
  color: 'white', // Or any color you prefer
  fontSize: '15px', // Adjust the size as needed
  fontWeight: '400', // Choose 400 for normal and 700 for bold
  fontFamily: "'Old Standard TT', serif", // Apply the Google Font here
});

export const StyledTextSmallB = styled(Typography)({
  color: 'black',
  fontSize: '28px',
  fontWeight: 'bold',
  fontFamily: "'Playfair Display', serif", // Apply the Google Font here
});

export const LowerStyledTextB = styled(Typography)({
  color: 'black', // Or any color you prefer
  fontSize: '18px', // Adjust the size as needed
  fontWeight: '400', // Choose 400 for normal and 700 for bold
  fontFamily: "'Old Standard TT', serif", // Apply the Google Font here
});

export const MainContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(34, 38, 57, 0.99)', // Set your desired RGB color here
  minHeight: '100vh', // Ensure it covers the full viewport height
  width: '100%',
});

export const Header = styled('header')({
  width: '100%',
  padding: '20px 0',
  backgroundColor: '#f0f0f0',
  textAlign: 'center',
});

export const IconStripe = styled('div')({
  backgroundColor: 'white',
  width: '100%',
  padding: '20px 0', // Adjust padding as needed
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px', // Adjust the space between icons as needed
});

export const HeroContainer = styled('div')({
  position: 'relative',
  width: '100%',
  height: '50vh',
});

export const HeroImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const HeroContent = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: 'white',
});

export const HeroText = styled('div')({
  marginBottom: '20px',
});

export const HeroButton = styled('button')({
  padding: '10px 20px',
  backgroundColor: 'rgba(34, 38, 57, 0.99)',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(34, 38, 57, 0.8)', // Optional: change on hover for better UX
  },
});

export const ThreeColumnContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  width: '100%',
  height: '110%',
  padding: '20px 0',
  marginTop: '50px',
  marginBottom: '50px',
});
export const Column = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative', // Needed for absolute positioning of text
  width: '33.33%', // Assuming a three-column layout
  padding: '0 15px', // Adjust the padding as needed
  boxSizing: 'border-box', // Ensures padding is included in the width
});

export const Half = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative', // Needed for absolute positioning of text
  width: '50%', // Assuming a three-column layout
  padding: '0 15px', // Adjust the padding as needed
  boxSizing: 'border-box', // Ensures padding is included in the width
});

export const ColumnText = styled(Typography)(({ theme, top, left }) => ({
  position: 'absolute',
  top: top, // Use props to set top position
  left: left, // Use props to set left position
  color: 'white',
  padding: theme.spacing(1),
  backgroundColor: 'rgba(0, 0, 0, 0)', // Fully transparent background
}));

export const SmallImage = styled('img')({
  width: '15%',
  height: 'auto',
});

export const LargeImage = styled('img')({
  width: '150%',
  height: 'auto',
});

export const AboutContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px',
  backgroundColor: 'white'
});

export const ImageContainer = styled('div')({
  flex: 1,
  marginRight: '20px',
});

export const TextContainer = styled('div')({
  flex: 1,
  marginLeft: '20px',
  marginBottom: '20px',
  color: 'black'
});

export const AbstandContainer = styled('div')({
  flex: 1,
  marginBottom: '20px',
  color: 'black'
});

export const PositionedSmallImage = styled(SmallImage)(({ top, left, right, bottom }) => ({
  position: 'absolute',
  top: top || 'auto',
  left: left || 'auto', 
  right: right || 'auto', 
  bottom: bottom || 'auto',
}));

export const PositionedPrettyText = styled(StyledTextSmall)(({ top, left, right, bottom }) => ({
  position: 'absolute',
  top: top || 'auto', // Default to 'auto' if not provided
  left: left || 'auto', 
  right: right || 'auto', 
  bottom: bottom || 'auto', 
}));
