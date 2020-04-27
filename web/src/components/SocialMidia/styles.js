import styled from 'styled-components';

export const Container = styled.div`

body {
  margin: 0;
  padding: 0;
  background: #2c3e50;
}

nav {
  width: 450px;
  margin: 40px auto;
}

ul {
  display: flex;
  justify-content: space-around;
}

ul li {
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  font-size: 25px;
  transform: rotate(45deg);
  overflow: hidden;
  transition: all .5s ease-in;
}

ul li:before {
  content:'';
  display: block;
  width: 50%;
  height: 100%;
  position: absolute;
  z-index: -2;
}

ul li:after {
  content:'';
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 50%;
  z-index: -3;
  transition: all .5s ease-in-out;
  opacity: .5;
}

ul li a {
  color: white;
  margin: auto;
  text-shadow: 0 2px 0 rgb(2,2,2);
  transform: rotate(-45deg);
  transition: all .5s ease-in;
}

ul li:hover {
  transform: rotate(765deg);
}

ul li:hover:after {
  right: 0%;
}

ul li:hover a {
   transform: rotate(-765deg);
}

ul li:nth-of-type(1):before,
ul li:nth-of-type(1):after {
  background: rgba(0, 0, 0, 0.2);
}

ul li:nth-of-type(2):before,
ul li:nth-of-type(2):after {
  background: rgba(0, 0, 0, 0.2);
}

ul li:nth-of-type(3):before,
ul li:nth-of-type(3):after {
  background: rgba(0, 0, 0, 0.2);
}

ul li:nth-of-type(4):before,
ul li:nth-of-type(4):after {
  background: rgb(247, 202, 24);
}
`;
