import React from 'react';

function Food({ name, picture }){
return <div>
  <h2>I like {name}</h2>
  <img src={picture}></img>
</div>
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiz4IGghoDnAhWJ-2EKHboUCkcQjRx6BAgBEAQ&url=http%3A%2F%2Fitempage3.auction.co.kr%2FDetailView.aspx%3Fitemno%3DB434338844&psig=AOvVaw1mWpK6mvclZ79YUD8fqtu8&ust=1578986771346397"
  },
  {
    name: "Samgyeopsal",
    image:
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiq783choDnAhUQfd4KHQlLD7kQjRx6BAgBEAQ&url=https%3A%2F%2Ftwitter.com%2Fhashtag%2F%25EC%25B4%2588%25EB%25B0%2580%25EB%258F%2584%25EC%2582%25BC%25EA%25B2%25B9%25EC%2582%25B4%3Flang%3Dar&psig=AOvVaw0MS_kboEMezj4NKUAHSSXh&ust=1578986893686093"
  },
  {
    name: "Bibimbap",
    image:
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiQ2OSohoDnAhWBfd4KHXGuBC0QjRx6BAgBEAQ&url=https%3A%2F%2Fguide.michelin.com%2Fkr%2Fko%2Farticle%2Ffeatures%2F%25EB%25B9%2584%25EB%25B9%2594%25EB%25B0%25A5-%25EC%25A1%25B0%25EA%25B1%25B4-%25EC%2597%2586%25EB%258A%2594-%25EC%259E%2590%25EC%259C%25A0&psig=AOvVaw177F-hpkuOzLSSrtO2p-yx&ust=1578986788856460"
  },
  {
    name: "Doncasu",
    image:
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiS_NSvhoDnAhVZfd4KHXgfAKMQjRx6BAgBEAQ&url=https%3A%2F%2Fhypebeast.kr%2F2019%2F9%2Ftonkatsu-mania-pork-cutlet-seoul-restaurant-top-5&psig=AOvVaw21T6oiGY7mLBsVY9J9YVW6&ust=1578986804538423"
  },
  {
    name: "Kimbap",
    image:
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiq5-q2hoDnAhUIPXAKHc_5A_4QjRx6BAgBEAQ&url=http%3A%2F%2Fwww.10000recipe.com%2Frecipe%2F6027371&psig=AOvVaw2L4JrrTHG9QKr8R6yWqrG4&ust=1578986820702196"
  }
];

function App() {
  return ( 
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
