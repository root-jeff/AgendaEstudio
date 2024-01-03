import React from 'react';
import {BaseScreen} from '../Template/BaseScreen';
import {Card, Text} from 'react-native-paper';
import {SearchListFilter} from '../components/BaseComponents/SearchListFilter';
import {CustomButton} from '../components/BaseComponents/CustomButton';
import {Info} from '../components/BaseComponents/Info';

const infoExample = [
  {
    id: 1,
    title: 'title 1',
    subTitle: 'subtitle 1',
    content: 'content 1',
    status: 'status 1',
    date: 'date 1',
  },
  {
    id: 2,
    title: 'title 2',
    subTitle: 'subtitle 2',
    content: 'content 2',
    status: 'status 2',
    date: 'date 2',
  },
  {
    id: 3,
    title: 'title 3',
    subTitle: 'subtitle 3',
    content: 'content 3',
    status: 'status 3',
    date: 'date 3',
  },
  {
    id: 4,
    title: 'title 4',
    subTitle: 'subtitle 4',
    content: 'content 4',
    status: 'status 4',
    date: 'date 4',
  },
  {
    id: 5,
    title: 'title 5',
    subTitle: 'subtitle 5',
    content: 'content 5',
    status: 'status 5',
    date: 'date 5',
  },
];

export const NextScreen = () => {
  return (
    <BaseScreen>
      <>
        <SearchListFilter
          data={infoExample}
          placeholder="Buscar..."
          textCompare={item => [
            item.content,
            item.status,
            item.title,
            item.date,
          ]}
          renderItem={({title, content, status, date, subTitle}) => (
            <Card style={{margin: 5, padding: 5}}>
              <Card.Content>
                <Text variant="titleLarge">Card {title}</Text>
                <Text variant="bodyMedium">{subTitle}</Text>
                <Info property={'Content'} info={content}></Info>
                <Info property={'Status'} info={status}></Info>
                <Info property={'Date'} info={date} infoTextColor="red"></Info>
              </Card.Content>
              <Card.Cover source={{uri: 'https://picsum.photos/800'}} />
              {/* <Image
                  source={{
                    uri: 'https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg',
                  }}
                  style={{
                    aspectRatio: 1,
                    borderRadius: 15,
                  }}></Image> */}
              <Card.Actions>
                <CustomButton
                  onPress={() => {}}
                  title={'Cancelar'}
                  type="contained-tonal"
                />
                <CustomButton onPress={() => {}} title={'Ok'} />
              </Card.Actions>
            </Card>
          )}
          ListEmptyText={'no hay texto :('}
          refreshFunction={() => {}}
          filters={[
            {
              name: 'Content',
              property: 'content',
            },
            {
              name: 'Status',
              property: 'status',
            },
            {
              name: 'Date',
              property: 'date',
            },
          ]}></SearchListFilter>
      </>
    </BaseScreen>
  );
};
