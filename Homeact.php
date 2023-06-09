<?php
/**PASCUA,NEILDRIC B. 201810165
 * ERESTAIN, JHOWIE MHAY P. 201810164
 * 
 */
namespace App\Controllers;

class Homeact extends BaseController
{
    public function index()
    {
        $data = [

            'page_title' => 'Activity 6',
            'page_heading' => 'CodeIgniter 4 Activity 6',

        ];

         
        return view('homeview', $data);
       
    }

    public function about()
    {
        $data = [

            'page_title' => 'Activity 6',
            'page_heading' => 'About Us Activity 6',

        ];
         
        echo view('aboutview', $data);
        
    }
}
