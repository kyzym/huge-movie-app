import * as SC from './AddInfList.styled';

const AdditionalInformationList = () => (
  <SC.LinkWrapper>
    <SC.SubTitle>Additional information:</SC.SubTitle>
    <SC.DetailsList>
      <li>
        <SC.DetailsLink to="cast">Cast</SC.DetailsLink>
      </li>
      <li>
        <SC.DetailsLink to="reviews">Reviews</SC.DetailsLink>
      </li>
    </SC.DetailsList>
  </SC.LinkWrapper>
);
export default AdditionalInformationList;
