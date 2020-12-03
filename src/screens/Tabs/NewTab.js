import React, { useRef, useEffect, useState } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { getArticles } from '../../services/NewsData';
import { Alert, View, ActivityIndicator } from 'react-native';
import DataItem from '../../components/ListData'

const Tab1 = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      // do componentDidMount logic
      getArticles().then(data => {
        setData({

          data: data
        });
        setIsLoading({
          isLoading: false,


        });
      }, error => {
        Alert.alert('Error', 'Something went wrong!');
      }
      )
      mounted.current = true;
    } else {
      // do componentDidUpdate logic
    }
  });


  let view = isLoading ? (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <ActivityIndicator animating={isLoading} color="#00f0ff" /> */}
      <Text style={{ marginTop: 10 }} children="Please Wait.." />
    </View>
  ) : (

      <View>
        console.log("hhh")
        <Text>heelo</Text>
        <List
          dataArray={data}
          renderRow={(item) => {
            return (
              <DataItem data={item} />
            )
          }} />
      </View>

    )

  console.log(data);
  console.log(isLoading)
  return (

    < Container >

      <Content>
        {view}
      </Content>
    </Container >
  );

}
export default Tab1