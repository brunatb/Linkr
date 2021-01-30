/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Modal from "react-modal";

export default function Maps({ name, place }) {
  const [open, setOpen] = useState(false);
  const mapStyles = {
    height: "90%",
    width: "100%",
  };
  const defaultCenter = {
    lat: parseFloat(place.latitude),
    lng: parseFloat(place.longitude),
  };
  return (
    <Container>
      <MdLocationOn onClick={() => setOpen(true)} />
      <Modal style={style} isOpen={open} ariaHideApp={false}>
        <Close>
          <h2>{`${name}'s location`}</h2>
          <AiOutlineClose onClick={() => setOpen(false)} />
        </Close>
        <LoadScript googleMapsApiKey={process.env.KEY}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          />
        </LoadScript>
      </Modal>
    </Container>
  );
}

const Container = styled.span`
  svg {
    color: white;
    cursor: pointer;
  }
`;

const Close = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 30px;
    font-weight: bold;
    margin: 0 0 0.5em 0;
  }

  svg {
    cursor: pointer;
  }
`;

export const style = {
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    display: "flex",
  },
  content: {
    top: "15%",
    margin: "0 auto",
    backgroundColor: "#333",
    width: "50%",
    minWidth: "45vh",
    height: "80vh",
    opacity: "1",
    borderRadius: "30px",
    padding: "3% 5%",
    color: "white",
  },
};
