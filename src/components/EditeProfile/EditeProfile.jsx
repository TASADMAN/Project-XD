


export default function EditeProfile() {
    return (
      <>
      <div class="bg-gray-950 w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
      <aside class="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
          <div class="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12 text-white">
              <h2 class="pl-3 mb-4 text-2xl font-semibold text-white">Settings</h2>
              <a href="#" class="flex items-center px-3 py-2.5 font-bold bg-white  text-limegreen border rounded-full">Pubic Profile</a>
              <a href="#" class="flex items-center px-3 py-2.5 font-semibold  hover:text-limegreen hover:border hover:rounded-full">Account Settings</a>
              <a href="#" class="flex items-center px-3 py-2.5 font-semibold hover:text-limegreen hover:border hover:rounded-full  ">Notifications</a>
              <a href="#" class="flex items-center px-3 py-2.5 font-semibold hover:text-limegreen hover:border hover:rounded-full  ">PRO Account</a>
          </div>
      </aside>
      <main class="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
          <div class="p-2 md:p-4">
              <div class="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                  <h2 class="pl-6 text-2xl font-bold sm:text-xl text-white text-center">Public Profile</h2>
                  <div class="grid max-w-2xl mx-auto mt-8">
                      <div class="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                          <img class="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-limegreen-300 dark:ring-limegreen"
                              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                              alt="Bordered avatar"/>
                          <div class="flex flex-col space-y-5 sm:ml-8">
                              <button type="button" class="py-3.5 px-7 text-base font-medium text-white focus:outline-none bg-limegreen rounded-lg border border-indigo-200 hover:bg-gray-800  focus:z-10 focus:ring-4 hover:text-white focus:ring-indigo-200 ">Change picture</button>
                              <button type="button" class="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 ">Delete picture</button>
                          </div>
                      </div>
                      <div class="items-center mt-8 sm:mt-14 text-[#202142]">
                          <div class="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                              <div class="w-full">
                                  <label for="first_name" class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your first name</label>
                                  <input type="text" id="first_name" class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 " placeholder="Your first name" value="Jane" required/>
                              </div>
                              <div class="w-full">
                                  <label for="last_name" class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your last name</label>
                                  <input type="text" id="last_name" class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 " placeholder="Your last name" value="Ferguson" required/>
                              </div>
                          </div>
  
                          <div class="mb-2 sm:mb-6">
                              <label for="email" class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your email</label>
                              <input type="email" id="email" class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 " placeholder="your.email@mail.com" required/>
                          </div>
  
                          <div class="mb-2 sm:mb-6">
                              <label for="password" class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Password</label>
                              <input type="text" id="password" class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 " placeholder="your profession" required/>
                          </div>
  
                          <div class="mb-2 sm:mb-6">
                              <label for="number" class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Number</label>
                              <input type="text" id="number" class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 " placeholder="your profession" required/>
                          </div>
  
                          <div class="mb-6">
                              <label for="message" class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Bio</label>
                              <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 " placeholder="Write your bio here..."></textarea>
                          </div>
  
                          <div class="flex justify-end">
                              <button type="submit" class="text-whitetext-base text-white focus:outline-none border border-indigo-200  focus:z-10 focus:ring-4 hover:text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-800  hover:bg-limegreen ">Save</button>
                          </div>
  
                      </div>
                  </div>
              </div>
          </div>
      </main>
  </div>
      </>
    )
  }