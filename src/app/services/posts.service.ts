import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category.interface';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[];
  arrCategories: Category[];

  constructor() { 
    this.arrCategories = new Array(
      { title: 'Playa' },
      { title: 'Montaña' },
      { title: 'Ciudad' },
      { title: 'Rural' },
      { title: 'Festivales' }
    );
    this.arrPosts = new Array(
      {
        id: 1,
        title: 'Titular categoría Playa',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatem aspernatur quam a porro voluptates quo nam earum accusantium eligendi! Cupiditate laudantium aspernatur nam explicabo, nesciunt excepturi consectetur earum. Iusto. 
        Praesentium, ullam? Illo, asperiores. Dolore atque quo sed consectetur, nam blanditiis dolorum tenetur quidem amet accusantium provident aspernatur quia adipisci voluptate quos, repellat velit fuga voluptatem quam. Enim, sunt exercitationem.
        Quam rerum accusamus eos maxime facilis nemo consequatur voluptate corporis cupiditate aliquam sequi modi perspiciatis odio ullam, quo, autem, harum quibusdam eum error qui magnam natus a culpa! Veritatis, animi?
        Sequi quisquam culpa fugit at id impedit amet a incidunt aspernatur exercitationem illo perspiciatis ullam doloribus, quos natus accusantium suscipit, temporibus in. Doloribus dolore odio eum ducimus molestiae eveniet quisquam.
        Similique quisquam necessitatibus voluptate asperiores praesentium maxime sequi rerum optio? Quibusdam aliquid ut facilis dolores maxime impedit reprehenderit delectus ex quia qui, earum ipsam fuga, commodi accusantium velit possimus omnis?`,
        author: 'Cristian Martínez',
        image: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/02/25/5fa51ffee30d6.jpeg',
        date: '2022-02-17',
        category: 'Playa'
      },
      {
        id: 2,
        title: 'Titular categoría Montaña',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatem aspernatur quam a porro voluptates quo nam earum accusantium eligendi! Cupiditate laudantium aspernatur nam explicabo, nesciunt excepturi consectetur earum. Iusto. 
        Praesentium, ullam? Illo, asperiores. Dolore atque quo sed consectetur, nam blanditiis dolorum tenetur quidem amet accusantium provident aspernatur quia adipisci voluptate quos, repellat velit fuga voluptatem quam. Enim, sunt exercitationem.
        Quam rerum accusamus eos maxime facilis nemo consequatur voluptate corporis cupiditate aliquam sequi modi perspiciatis odio ullam, quo, autem, harum quibusdam eum error qui magnam natus a culpa! Veritatis, animi?
        Sequi quisquam culpa fugit at id impedit amet a incidunt aspernatur exercitationem illo perspiciatis ullam doloribus, quos natus accusantium suscipit, temporibus in. Doloribus dolore odio eum ducimus molestiae eveniet quisquam.`,
        author: 'José Montañas',
        image: 'https://www.informavalencia.com/wp-content/uploads/2020/12/everest.jpg',
        date: '2022-02-02',
        category: 'Montaña'
      },
      {
        id: 3,
        title: 'Titular categoría Ciudad',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatem aspernatur quam a porro voluptates quo nam earum accusantium eligendi! Cupiditate laudantium aspernatur nam explicabo, nesciunt excepturi consectetur earum. Iusto. 
        Praesentium, ullam? Illo, asperiores. Dolore atque quo sed consectetur, nam blanditiis dolorum tenetur quidem amet accusantium provident aspernatur quia adipisci voluptate quos, repellat velit fuga voluptatem quam. Enim, sunt exercitationem.
        Similique quisquam necessitatibus voluptate asperiores praesentium maxime sequi rerum optio? Quibusdam aliquid ut facilis dolores maxime impedit reprehenderit delectus ex quia qui, earum ipsam fuga, commodi accusantium velit possimus omnis?`,
        author: 'Pedro Ciudad',
        image: 'https://img2.rtve.es/imagenes/ciudades-espanolas-patrimonio-humanidad-episodio-2-toledo/1628351276230.jpg',
        date: '2022-01-06',
        category: 'Ciudad'
      },
      {
        id: 4,
        title: 'Titular categoría Rural',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatem aspernatur quam a porro voluptates quo nam earum accusantium eligendi! Cupiditate laudantium aspernatur nam explicabo, nesciunt excepturi consectetur earum. Iusto. 
        Praesentium, ullam? Illo, asperiores. Dolore atque quo sed consectetur, nam blanditiis dolorum tenetur quidem amet accusantium provident aspernatur quia adipisci voluptate quos, repellat velit fuga voluptatem quam. Enim, sunt exercitationem.
        Similique quisquam necessitatibus voluptate asperiores praesentium maxime sequi rerum optio? Quibusdam aliquid ut facilis dolores maxime impedit reprehenderit delectus ex quia qui, earum ipsam fuga, commodi accusantium velit possimus omnis?`,
        author: 'María Rural',
        image: 'https://educacionambiental26.files.wordpress.com/2016/04/paisaje_de_prados_de_siega_en_cantabria_espac3b1a-_monte_riotuerto_barrio_de_idiopuerta1.jpg',
        date: '2022-01-12',
        category: 'Rural'
      },
      {
        id: 5,
        title: 'Titular categoría Festivales',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatem aspernatur quam a porro voluptates quo nam earum accusantium eligendi! Cupiditate laudantium aspernatur nam explicabo, nesciunt excepturi consectetur earum. Iusto. 
        Praesentium, ullam? Illo, asperiores. Dolore atque quo sed consectetur, nam blanditiis dolorum tenetur quidem amet accusantium provident aspernatur quia adipisci voluptate quos, repellat velit fuga voluptatem quam. Enim, sunt exercitationem.
        Similique quisquam necessitatibus voluptate asperiores praesentium maxime sequi rerum optio? Quibusdam aliquid ut facilis dolores maxime impedit reprehenderit delectus ex quia qui, earum ipsam fuga, commodi accusantium velit possimus omnis?`,
        author: 'Sofía Festivales',
        image: 'https://d500.epimg.net/cincodias/imagenes/2020/05/17/legal/1589748176_922084_1589748407_noticia_normal.jpg',
        date: '2022-01-18',
        category: 'Festivales'
      }
    );
  }


  getAllPost(): Post[]{
    this.arrPosts = this.arrPosts.sort((a,b) => { 
      return <any>new Date(b.date) - <any>new Date(a.date)
    })
    
    return this.arrPosts;
  }

  getAllCategories(): Category[] {
    return this.arrCategories;
  }

  getById(pId: number): Post | undefined{
    return this.arrPosts.find(post => post.id === pId);
  }

  newPost(pForm: any): any {
    let lastId = this.arrPosts.length + 1;
    pForm.id = lastId
    pForm.author = 'Cristian Martínez';  
    
    return this.arrPosts.push(pForm)
  }

  filterCategory(cat: string): Post[] {
    return this.arrPosts.filter(post => post.category === cat );
  }
}
