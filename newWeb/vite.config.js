import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
export default defineConfig({
    base:'/blog/',
    resolve:{
        alias:[{
            find:"@",
            replacement:path.join(__dirname,'src')
        },
            {
            find:'components',
            replacement:path.join(__dirname,'src/components')
        }]
    },
    css:{
      preprocessorOptions:{
          less:{

          }
      }
    },
    plugins: [vue()]
})
