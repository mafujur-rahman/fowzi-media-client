import { IBlogDT } from "@/types/blog-d-t";

// blog images


// blog modern 
import b_m_1 from "@/assets/img/case-studies/blogOne.png";
import b_m_2 from "@/assets/img/case-studies/blogTwo.jpg";
import b_m_3 from "@/assets/img/case-studies/importanceOfUsing.jpg";




export const blog_modern: IBlogDT[] = [
  {
    id: 5,
    img: b_m_1,
    title: 'Awad For Puntland',
    date: '21. OCT. 2024',
    category: 'Case study for Amb. Ahmed Isse Awad, Puntland Presidential Candidate, 2024.',
    author: 'https://fowzimedia.com/awad.pdf',
  },
  {
    id: 6,
    img: b_m_1,
    title: 'Awad For Puntland',
    date: '21. OCT. 2024',
    category: 'Case study for Amb. Ahmed Isse Awad, Puntland Presidential Candidate, 2024.',
    author: 'https://fowzimedia.com/awad.pdf',
  },
  {
    id: 7,
    img: b_m_2,
    title: 'Jannah Fitwear',
    date: '01. FEB. 2022',
    category: 'Jannah Fitwear, a modern fitness and lifestyle brand for Muslim women.',
    author: '',

  },
  {
    id: 8,
    img: b_m_3,
    title: '2020 Census',
    date: '09. MAY. 2020',
    category: 'Official case study for the City of Minneapolis 2020 Census.',
    author: '',

  },
  
];



export const blog_data: IBlogDT[] = [

  ...blog_modern,

]

export const blog_classic = [ /* your data */ ];
export const blog_lists = [ /* your data */ ];
export const blog_home_five = [ /* your data */ ];


