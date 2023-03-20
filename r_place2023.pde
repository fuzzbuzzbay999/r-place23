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
  //ALIGN =loadImage("align.png");
  //image(ALIGN,0,0);
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
}
