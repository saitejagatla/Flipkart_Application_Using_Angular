import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface Label {
  text: string;
  width: number;
  height: number;
  editMode: boolean;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  searchText: string = '';

  

  
  currentIndex = 0;
  images = [
    { src: 'https://blog.talkcharge.com/wp-content/uploads/2020/09/Flipkart-Upcoming-Sale.jpg', alt: 'Image 1' },
    { src: 'https://www.enggrecruit.com/blog/wp-content/uploads/2021/07/Flipkart-Upcoming-Sale-and-Offers.png', alt: 'Image 2' },
    { src: 'https://i.gadgets360cdn.com/large/flipkart_big_saving_days_sale_1651580570504.jpg', alt: 'Image 3' },
    { src: 'https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/09/bestsellers.jpg?ssl=1', alt: 'Image 4' },
    { src: 'https://awbi.org/wp-content/uploads/2023/01/Flipkart-Upcoming-Sale-February-2023.jpg', alt: 'Image 5' }
  ];

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  }

  // side by side
  items = [
    { title: 'iPhone 14 Pro Max', content: '₹ 139900.00', imageUrl: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg' },
    { title: 'OnePlus Nord CE 3 ', content: '₹ 19,999', imageUrl: 'https://techgrade.in/wp-content/uploads/2023/04/OnePlus-Nord-CE-3-Lite-5G.jpg' },
    { title: 'realme C55', content: '₹ 10,999', imageUrl: 'https://m.media-amazon.com/images/I/41+YRy5xkwL._SL1000_.jpg' },
    { title: 'Samsung Galaxy M14', content: '₹ 13,990', imageUrl: 'https://s3b.cashify.in/gpro/uploads/2021/11/17144159/samsung-galaxy-m14-5g-front.jpg' },
    { title: 'vivo X90 5G', content: '₹ 59,999', imageUrl: 'https://www.newmobileprice.pk/wp-content/uploads/2022/06/Vivo-X90.jpg' },
    { title: 'Redmi Note 12 Pro', content: '₹ 24,523', imageUrl: 'https://www.losdistribuidores.com/wp-content/uploads/2022/10/xiaomi-redmi-note-12-pro-plus-4.webp' },
    { title: 'Redmi Note 11 Pro', content: '₹ 20,949', imageUrl: 'https://youget.pt/98315-home_default/xiaomi-redmi-note-11-pro-5g-128gb6gb-dual-sim-azul.jpg' },
    { title: 'OPPO A78 5G', content: '₹ 17,990', imageUrl: 'https://p-my.ipricegroup.com/uploaded_99f6ac63a07b2a09c01e3e166e969d56f7f54b80.jpg' },

  ];

  onButtonClick(item: any) {
    console.log('Button clicked for item:', item);
  }
  
  constructor(private router : Router){
    

  }

 

 

  submit(){
    this.router.navigate(['login']);
  }

  
  showAlert() {
    alert('Please Login');
  }


  



  search() {
    if (this.searchText == 'electronics') {
      // alert('The Selected Content Is Already Available');
      this.router.navigate(['/electronics']);
    } else if (this.searchText == 'grocery') {
      this.router.navigate(['/grocery']);
      //  alert('The Selected Content Is Already Available');
    } else if (this.searchText == 'puma') {
      // this.router.navigate(['/grocery']);
      alert('The Selected Content Is Already Available');
    }
    else if (this.searchText == 'LG') {
      this.router.navigate(['/lg']);
      // alert('The Selected Content Is Already Available');
    }
    else {
      alert('No matching pages found');
    }
  }

  product = {
    name: 'Product Name',
    price: 10.00,
    image: 'product-image.jpg'
  };


  

  


}
