using Microsoft.AspNetCore.Mvc;

namespace Admin_Dashboard.Controllers
{
    public class ProfileController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
