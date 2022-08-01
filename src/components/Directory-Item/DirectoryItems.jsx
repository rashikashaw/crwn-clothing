import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './DirectoryItems.Styles';

export const DirectoryItems = ( { category } ) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate()
  const goToCategoryHandler = () => {
    navigate(route);
  };
  return(
    <DirectoryItemContainer onClick={goToCategoryHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}
