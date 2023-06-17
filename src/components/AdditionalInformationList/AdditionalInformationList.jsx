import { Box } from 'utils/Box.styled';
import * as SC from './AddInfList.styled';

const AdditionalInformationList = () => (
  <SC.LinkWrapper>
    <SC.SubTitle>Additional information:</SC.SubTitle>
    <Box as="ul" display="flex" flexDirection="column" gridGap={20}>
      <li>
        <SC.DetailsLink to="cast">Cast</SC.DetailsLink>
      </li>
      <li>
        <SC.DetailsLink to="reviews">Reviews</SC.DetailsLink>
      </li>
    </Box>
  </SC.LinkWrapper>
);
export default AdditionalInformationList;
