import styled from 'styled-components';

export const Tile = styled.div`
  flex-direction: column;
  padding: 5px;
`;

export const CarouselContainer = styled.div`
  display: flex;
  overflow: auto;
  width: 100%;
`;

export const ModalContainer = styled.div`
  font-family: Gotham,gotham,Verdana,sans-serif;
  font-size: 85%;
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: black;
  opacity: .9;  
`;

export const Content = styled.div`
  position: relative;
  display: block;
  align-self: center;
`;

export const ModalCounter = styled.div`
  position: absolute;
  display: inline-block;
  top: 10px;
  right: 10px;
  border-radius: 3px;
  padding: 5px 9px;
  opacity: .8;
  background-color: #444;
  z-index: 10;
  color: #fff;
`;

export const ModalBar = styled.div`
  position: absolute;
  display: flex;
  z-index: 10;
  width: 100%;
  color: #fff;
  top: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const ModalTabLink = styled.div`
  float: left;
  display: flex;
  align-items: center;
  color: #3390e9;
  margin-left: 20px;
  border-bottom: 1px solid #3390e9;
`;

export const ModalGalleryActions = styled.ul`
  list-style-type: none;
  display: table;
  margin: 0;
  margin-left: auto;
  padding-right: 12px;
`;

export const ModalFooter = styled.div`
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  position: absolute;
  justify-content: center;
`;

export const PropertyDetails = styled.div`
  color: #fff;
`;

export const GalleryActionItem = styled.li`
  display: table-cell;
  height: 100%;
  padding-left: 30px; 
  vertical-align: middle; 
`;

export const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

export const GalleryButton = styled.button`
  background-color: #0074e4;
  border-radius: 3px;
  color: #fff;
  border: none;
  padding: 7px 12px;
`;

export const ModalButton = styled.button`
  width: 35px;
  height: 50px;
  padding: 0;
  background-color: #333333;
  opacity: .4;
  align-self: center;
  border: 1px solid #fff;
`;