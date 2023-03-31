const pHeroDataLoad = async () => {
    try {

        const url = `http://openapi.programming-hero.com/api/course/curriculum`;
        const res = await fetch(url);
        const data = await res.json();
        showModuleDisplay(data.data);


    } catch (error) {
        console.log(error);
    }
}

let num = 0;
const showModuleDisplay = (datas) => {
    const moduleContainer = document.getElementById('accordion-open');
    datas.forEach(data => {
        num += 1;
        console.log(num);
        const { name } = data;
        const divModule = document.createElement('div');
        divModule.innerHTML = `
       <h2 id="accordion-open-heading-${num}">
       <button type="button"
           class="flex items-center justify-between w-full p-5 font-medium text-left text-purple-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-purple-800 dark:border-purple-700 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-800"
           data-accordion-target="#accordion-open-body-${num}" aria-expanded="false"
           aria-controls="accordion-open-body-${num}">
           ${name}
           <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor"
               viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
           </svg>
       </button>
   </h2>
   <div id="accordion-open-body-${num}" class="hidden" aria-labelledby="accordion-open-heading-${num}">
       <div
           class="p-5 font-light border border-b-0 border-gray-200 dark:border-purple-700 dark:bg-purple-900">
           <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of
               interactive components built on top of Tailwind CSS including buttons, dropdowns,
               modals, navbars, and more.</p>
           <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a
                   href="/docs/getting-started/introduction/"
                   class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and
               start developing websites even faster with components on top of Tailwind CSS.</p>
       </div>
   </div>
       `
       moduleContainer.appendChild(divModule)
    })

}

// call to pHeroDataLoad 
pHeroDataLoad()