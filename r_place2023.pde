import java.awt.Robot;
import java.awt.event.InputEvent;
import java.awt.event.KeyEvent;
Robot r;
PImage ALIGN;
void setup() {
 size(100, 100);
  //fullScreen();
  noLoop();
  try {
    r = new Robot();
  }
  catch(Exception e) {
    e.printStackTrace();
  }
}

void draw() {
//   ALIGN =loadImage("align cookies.png");
 //image(ALIGN,0,0);
  
  for(int i=0;i<2;i++){


 link("https://www.reddit.com/account/register/?experiment_d2x_2020ify_buttons=enabled&experiment_d2x_google_sso_gis_parity=enabled&experiment_d2x_onboarding=enabled&experiment_d2x_am_modal_design_update=enabled");
  delay(3000);
  print("fin");

  r.mouseMove(628, 489);
  r.mousePress(InputEvent.BUTTON1_MASK);
  r.mouseRelease(InputEvent.BUTTON1_MASK);

  delay(10);
  r.keyPress(KeyEvent.VK_ENTER);
  delay(1);
  r.keyRelease(KeyEvent.VK_ENTER);
  delay(1000);
  r.mouseMove(567, 514);
  r.mousePress(InputEvent.BUTTON1_MASK);
  r.mouseRelease(InputEvent.BUTTON1_MASK);

  delay(1000);
  r.mouseMove(689, 601);
  r.mousePress(InputEvent.BUTTON1_MASK);
  r.mouseRelease(InputEvent.BUTTON1_MASK);
    delay(15000);
    delay(10);
  r.keyPress(KeyEvent.VK_CONTROL );
    delay(10);
  r.keyPress(KeyEvent.VK_W);
  delay(1);
  r.keyRelease(KeyEvent.VK_W);
  delay(1);
  r.keyRelease(KeyEvent.VK_CONTROL );
  //link("www.chrome://settings/clearBrowserData")
  
  r.mouseMove(400,50);
  r.mousePress(InputEvent.BUTTON1_MASK);
  r.mouseRelease(InputEvent.BUTTON1_MASK);
  delay(1000);
  r.keyPress(KeyEvent.VK_CONTROL );
    delay(10);
  r.keyPress(KeyEvent.VK_V);
  delay(1);
  r.keyRelease(KeyEvent.VK_V);
  delay(1);
  r.keyRelease(KeyEvent.VK_CONTROL );
     delay(50);
   r.keyPress(KeyEvent.VK_ENTER);
   delay(1);
   r.keyRelease(KeyEvent.VK_ENTER);
  delay(2500);
  r.mouseMove(879,555);
   r.mousePress(InputEvent.BUTTON1_MASK);
  r.mouseRelease(InputEvent.BUTTON1_MASK);
  delay(2000);

  }
 
}
