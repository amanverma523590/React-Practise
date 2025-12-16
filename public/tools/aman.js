db.employee.updateMany(){
    $and : [
        {category:"electronics"}, {'rating.rate': {lt:4} }
    ]
    {$set:{stock:false}}
}