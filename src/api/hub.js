
import http from "utils/request";

export const week_choiceApi = (cityId = 140, page = 0) => http.get({
    url: "/ajax/hub/home/v1/web/week_choice.json",
    data: {
        city_id: cityId,
        page: page
    }
})


export const categoryApi = (cityId=140)=>http.get({
    url:"/ajax/hub/home/v1/virtual/category.json",
    data:{
        city_id:cityId,
        is_new_local:true
    }
})

export const productlistApi = (id,sort,cityId,page)=>http.get({
    url:"/ajax/4/tab/category_product_list.json",
    data:{
        category_id:id,
        sort:sort,
        from_id:0,
        city_id:cityId,
        page:page
    }
})