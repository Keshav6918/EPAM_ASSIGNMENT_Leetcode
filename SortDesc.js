function SortDescObj(obj){
  const ob1 = obj.sort((a,b) => a.score - b.score);

    ob1.forEach((ob1) => {
      console.log(`${ob1.name}`);
    });
}
