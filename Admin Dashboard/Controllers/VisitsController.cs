using Microsoft.AspNetCore.Mvc;

namespace Admin_Dashboard.Controllers
{
    public class VisitsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
