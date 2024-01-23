using Microsoft.AspNetCore.Mvc;

namespace Admin_Dashboard.Controllers
{
    public class EmployeeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult EmpDetails()
        {
            return View();
        }

    }
}
