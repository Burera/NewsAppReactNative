import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Body, Right, Title } from 'native-base';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
const TabScreen = () => {



  return (
    <Container>
      <Header style={{ backgroundColor: '#009387', height: 100 }} hasTabs>

        <Body>
          <Title style={{ color: 'white', alignSelf: 'center' }}>News App</Title>
        </Body>

      </Header>
      <Tabs tabBarUnderlineStyle={{ backgroundColor: 'white' }}>
        <Tab tabStyle={{ backgroundColor: '#009387' }}
          activeTabStyle={{ backgroundColor: '#009387' }}
          textStyle={{ color: 'white' }}
          activeTextStyle={{ color: 'white' }} heading="General">
          <Tab1 />
        </Tab>
        <Tab tabStyle={{ backgroundColor: '#009387' }}
          activeTabStyle={{ backgroundColor: '#009387' }}
          textStyle={{ color: 'white' }}
          activeTextStyle={{ color: 'white' }} heading="Business">
          <Tab2 />
        </Tab>
        <Tab tabStyle={{ backgroundColor: '#009387' }} activeTabStyle={{ backgroundColor: '#009387' }} textStyle={{ color: 'white' }} activeTextStyle={{ color: 'white' }} heading="Technology">
          <Tab3 />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default TabScreen;