using Microsoft.AspNetCore.Mvc;

namespace Admin_Dashboard.Controllers
{
    public class WareHouses : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
