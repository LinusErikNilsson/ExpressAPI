import { Request, Response } from "express";
import { Post } from './post.model';

let posts: Post[] = [{
  id: 1,
  title: "Awesome new EV for new markets",
  header: "Ditch your old car, this new one will drive circles around it",
  content: "Lorum",
},
{
  id: 2,
  title: "Magic trick which will make your day better",
  header: "Tired every morning, feeling unenergize - this will solve it",
  content: "Lorum",
}
];

export const getAllPosts = (req: Request, res: Response) => 
{
  if (posts.length <= 0) 
  {
    res.status(404).send('No posts availible');
  }
  else 
  {
    res.status(200).json(posts);
  }
}