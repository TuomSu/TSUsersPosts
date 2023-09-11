import User from './types/User';
import Post from './types/Post';
import { read } from 'fs';

let users = require('../users.json') as User[];
let posts = require('../posts.json') as Post[];



// Part 2: write your logic here


function fetchUserPosts(){
    for (let user of users){
        console.log(`${user.firstName} ${user.lastName}`)

        for (let post of posts){
            if(post.userId === user.id){
                console.log(`- ${post.title}`)
            }
        }
        console.log('\n')
    }
}
        

fetchUserPosts();

