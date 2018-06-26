$(()=>{
    // sort by format
    const eBookInput = $('#e-bookInput'),
          paperbookInput = $('#paperbookInput'),
          items = $('tr'),
          titleSorting = $('#title-sorting'),
          nameSorting = $('#name-sorting');

    // sort by format
    // items.hide();

    eBookInput.on('click', () => {
        $('tr[data-version="ebook"]').show();
    });

    paperbookInput.on('click', () => {
        $('tr[data-version="paperback"]').show();
    });

    //sort by title and name
    titleSorting.on('click', ()=>{
        console.log('click')
        $('tr[data-author]').sort((a,b)=>{a-b})
    })
})