import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { viewLang } from './Languages'

const Botresources = styled.div`
  float: left;
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  a:visited {
    color: blue;
  }
`;

const Singleresource = styled.p`
  padding: 0.5rem;
  margin: 5px;
  border: 2px #b0b0b0 solid;
  border-radius: 15px;
`;

const Singlelink = styled.a`
  margin-left: 10px;
`;

// Resources renders the resources from the props passed down, from the
// text and href properties within the array of resources.
const Resources = (props) => {
  if (!props.resources) {
    return null;
  }
  return (
    <Botresources>
      {props.resources.map((resource, index) => (
        <div>
          <Singleresource key={index}>{resource.text}
            <Singlelink href={resource.href} key={index} target="__blank">{viewLang(props.lang)}</Singlelink>
          </Singleresource>
        </div>
      ))}
    </Botresources>
  );
};

Resources.propTypes = {
  resources: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired, href: PropTypes.string.isRequired,
  })),
};

Resources.defaultProps = {
  resources: [],
};

export default Resources;
