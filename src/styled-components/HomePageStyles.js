import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Main = styled.div`
  flex: 1;
  padding: 20px;

  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  ul {
    list-style: disc;
    margin-left: 20px;
    margin-bottom: 20px;

    li {
      font-size: 18px;
      line-height: 1.5;
    }
  }
`;

export const Sidebar = styled.div`
  flex: 0 0 300px;
  padding: 20px;

  p {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 18px;
      line-height: 1.5;
      margin-bottom: 10px;
    }
  }
`;

export const Ad = styled.div`
  flex: 0 0 300px;
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;

  p {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

export const Testimonials = styled.div`
  flex: 0 0 300px;
  margin-top: 20px;
  padding: 20px;
  background-color: #f5f5f5;

  p {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 18px;
      line-height: 1.5;
      margin-bottom: 10px;
    }
  }
`;

// Holy Grail Flexbox Layout
export const LayoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${Main} {
    flex: 2;
  }

  ${Sidebar}, ${Ad}, ${Testimonials} {
    flex: 1;
  }

  @media only screen and (max-width: 767px) {
    ${Main}, ${Sidebar}, ${Ad}, ${Testimonials} {
      flex: 1 0 100%;
    }
  }

  @media only screen and (min-width: 768px) {
    ${Main} {
      order: 2;
      margin-right: 20px;
    }

    ${Sidebar} {
      order: 1;
      margin-right: 20px;
    }

    ${Ad} {
      order: 3;
      margin-left: 20px;
    }
  }

  @media only screen and (min-width: 992px) {
    ${Main} {
      margin-left: 20px;
    }

    ${Sidebar} {
      margin-left: auto;
    }
  }
`;
