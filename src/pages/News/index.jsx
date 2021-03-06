import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

// import { Container } from './styles';
import PostFeed from '../../components/PostFeed';

const News = () => {
  const [posts] = useState([{
    id: '1',
    user: {
      name: 'O Boticário',
      profile_picture: 'https://pbs.twimg.com/profile_images/1272496197995986952/jeJkj3Ma_400x400.jpg',
    },
    message: {
      content: 'Além disso, nossos funcionários e familiares receberão kits de proteção. Afinal, o cuidado começa aqui dentro, né?',
      created_at: '2020-02-02T16:10:33Z',
    },
  },
  {
    id: '2',
    user: {
      name: 'O Boticário',
      profile_picture: 'https://pbs.twimg.com/profile_images/1272496197995986952/jeJkj3Ma_400x400.jpg',
    },
    message: {
      content: 'Com a união das demais marcas do grupo, doamos 216 toneladas de produtos de higiene para comunidades em vulnerabilidade social de diversas partes do país.',
      created_at: '2020-02-02T15:10:33Z',
    },
  },
  {
    id: '3',
    user: {
      name: 'O Boticário',
      profile_picture: 'https://pbs.twimg.com/profile_images/1272496197995986952/jeJkj3Ma_400x400.jpg',
    },
    message: {
      content: 'Tá sabendo da novidade? Tem lançamento de batons Make B. com ácido hialurônico e tá rolando amostra no app do Boti',
      created_at: '2020-02-02T16:00:00Z',
    },
  },
  {
    id: '4',
    user: {
      name: 'O Boticário',
      profile_picture: 'https://pbs.twimg.com/profile_images/1272496197995986952/jeJkj3Ma_400x400.jpg',
    },
    message: {
      content: 'Passe protetor solar e beba muuuita água. Essa dupla é essencial pra você conseguir aproveitar todos os dias de festa. Cuida desse corpo que você tanto ama!',
      created_at: '2020-02-03T15:10:40Z',
    },
  },
  {
    id: '5',
    user: {
      name: 'O Boticário',
      profile_picture: 'https://pbs.twimg.com/profile_images/1272496197995986952/jeJkj3Ma_400x400.jpg',
    },
    message: {
      content: 'Rainha que é Rainha também se preocupa com o reino animal. Tô muito orgulhosa e querendo que essa atitude vire moda! O Boti ama muito os bichinhos e não testa em animais há quase 20 anos.',
      created_at: '2020-02-04T18:10:23Z',
    },
  },
  {
    id: '6',
    user: {
      name: 'O Boticário',
      profile_picture: 'https://pbs.twimg.com/profile_images/1272496197995986952/jeJkj3Ma_400x400.jpg',
    },
    message: {
      content: 'Produtos veganos também demonstram nosso amor pela natureza!  Sabia que são mais de 30% de produtos de make sem nenhuma matéria-prima de origem animal? Ah, e 40% da linha de Nativa SPA também é vegana. Pra saber se o produto é vegano, é só conferir na embalagem!',
      created_at: '2020-02-05T16:10:00Z',
    },
  },
  {
    id: '7',
    user: {
      name: 'O Boticário',
      profile_picture: 'https://pbs.twimg.com/profile_images/1272496197995986952/jeJkj3Ma_400x400.jpg',
    },
    message: {
      content: 'É tanto produto em promoção que vc nem vai saber pra onde olhar.  Entra lá na nossa loja online e vem comemorar o Dia da #BotiLover com a gente.',
      created_at: '2020-02-06T11:10:00Z',
    },
  }]);
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <PostFeed
            name={item.user.name}
            message={item.message.content}
            date={item.message.created_at}
            avatar={item.user.profile_picture}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>

  );
};

export default News;
