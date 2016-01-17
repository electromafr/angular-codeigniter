<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Site extends CI_Controller {

	public function index()
	{
		$this->data['content'] = "site";
		$this->load->view('template/template', $this->data);
	}
}
