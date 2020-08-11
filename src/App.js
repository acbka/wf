import React from 'react';
import './App.css';
import {Header} from './components/header';
import {Section} from './components/section';
import {Gallery} from './components/gallery';
import {Footer} from './components/footer';
import b1 from './img/1.jpg';
import b2 from './img/2.jpg';
import b3 from './img/3.jpg';
import b4 from './img/4.jpg';
import b5 from './img/5.jpg';
import b6 from './img/6.jpg';
import t1 from './img/t1.png';
import t2 from './img/t2.png';
import t3 from './img/t3.png';
import sale from './img/sale.png';

class App extends React.Component{
   constructor(props) {
		super(props);
      this.state = {
         bouquets: [
            {
               description: "Букет невесты - от 1700 грн",
               img: b1,
               text: "Нежнейшие букеты различной формы способны подчекнуть красоту и обаяние невесты."
            },
            {
               description: "Букеты подружкам - от 1300 грн",
               img: b2,
               text: "Яркие разнообразные букеты подружкам подчеркнут индивидуальность каждой девушки."
            },
            {
               description: "Букет с пионами и пионовидной розой от 1500 грн",
               img: b6,
               text: "Букет с пионами и пионовидной розой - находка этого сезона - великолепное решение для торжества."
            },
            {
               description: "Президиум - от 2200 грн",
               img: b3,
               text: "Президиум - это место, куда будут обращены взоры гостей втечение всего вечера."
            },
            {
               description: "Оформление зоны церемонии - от 3300 грн",
               img: b5,
               text: "Зона церемоний задает тон всему торжеству."
            },
            {
               description: "Композиции на столы гостей - от 550 грн",
               img: b4,
               text: "Не обойдем вниманием мы и гостей, украсив изящными композициями праздничные столы."
            },
         ],
         testimonials: [t1, t2, t3],
         
      };
   }

  
	render() {
		return (
         <div>   
            <Header  />
            <Section id="service" name="Сервис" button={false}>
               <>
                  <p className="paragraph">Если ты хочешь получить запоминающийся и эффектный праздник, закажи у нас его цветочное оформление. Ведь оригинальные и эффектные букеты, венки и гирлянды живых и ароматных цветов всегда приносят людям удовлетворение, вдохновляют и восхищают своим естественным многообразием и нежной красотой.</p>
                  <p className="paragraph">Мы можем по единой задумке и цели, а также с индивидуальным подходом в соответствии с твоими пожеланиями, эффектно и нестандартно оформить изысканными цветочными композициями любое праздничное мероприятие. Наши цветы с их естественным расположением наполнят праздничный зал, дом или квартиру красотой и незабываемым ароматом.</p>
                  <p className="paragraph">Твои мама и папа, бабушки и дедушки, друзья и подруги будут приятно удивлены цветочными композициями наших флористов. У нас также можно заказать индивидуальный подарок в виде букета или цветочной композиции, где будут учтены все твои предпочтения и особенности. </p>
                  <p className="paragraph">Все что тебе надо сделать - это позвонить.</p>
               </> 
            </Section>
            <Gallery id="bouquets" name="Букеты" items={this.state.bouquets} card={true} />
            <Section id="about" name="О нас" button={true}>
               <>
                  <p className="paragraph">День свадьбы – это самый важный и запоминающийся момент в жизни каждого человека. Невозможно представить себе свадьбу без цветов. Цветы на свадьбе - это не только букет невесты, но и оформление зала церемоний, свадебного кортежа и (чего-то там еще).</p>  
                  <p className="paragraph">Флористы Wedding Flowers имеют многолетний опыт по составлению свадебных композиций. Наша фирма никогда не тиражирует свою работу. Обратившись к нам, можно быть уверенным в  уникальности свадебного оформления. Для будущих невест мы подготовим эксклюзивный свадебный букет, а профессиональные флористы украсят свадебный зал, подарив праздничному мероприятию яркие краски и незабываемые ароматы.</p>
                  <p className="paragraph">Наши флористы в своей работе придерживаются как национальных традиций, так и новых европейских тенденций. Ассортимент цветов поражает своим разнообразием.</p>
                  <p className="paragraph space-bottom">Хочешь красивую свадьбу? Звони прямо сейчас!</p>  
               </> 
            </Section>
            <Section id="sale" name="Акция" button={true}>
               <>
                  <div className="flex"> 
                     <div className="sale-text">
                        <p className="paragraph">С началом летнего сезона не пропустите нашу акцию!</p>
                        <p className="paragraph action">При заказе 5 букетов подружкам невесты - оформление президиума бесплатно!</p>
                        <p className="paragraph">Начинай воплощать свою мечту прямо сейчас! Звони!</p>
                     </div>
                     <div className="sale-img-wrap">
                        <img className="sale-img" src={sale} alt="sale" />
                     </div>
                  </div>
               </>
            </Section>
            <Section id="advantages" name="Наши преимущества" button={true}>
               <>
                  <p className="paragraph">Решение заказать цветочное оформление свадебной церемонии в Wedding Flowers  принесет тебе ряд преимуществ</p>
                  <ul>
                     <li className="paragraph">Естественность и изысканность профессионального цветочного оформления</li>
                     <li className="paragraph">Огромный ассортимент свежих цветов </li>
                     <li className="paragraph">Эксклюзивность каждого букета, каждой цветочной  композиции</li>
                     <li className="paragraph">Индивидуальный подход к каждому клиенту</li>
                     <li className="paragraph">Составление букеты для невесты с учетом ее внешности и фасона платья</li>
                     <li className="paragraph">Учет ваших творческих фантазий и финансового  состояния</li>
                     <li className="paragraph">Абсолютная оригинальность и яркость при фото и видеосъемке</li>
                     <li className="paragraph">Оптимальные цена и качество в зависимости от формы и варианта цветочной композиции</li>
                     <li className="paragraph">Бесплатная доставка при заказе полного свадебного оформления</li>
                     <li className="paragraph space-bottom">Профессионализм и гарантия качества</li>
                  </ul> 
               </> 
            </Section>
            <Gallery id="testimonials" name="Отзывы" button={false} items={this.state.testimonials} card={false} />
            <Footer />
         </div>
      );
	}
}

export default App;
