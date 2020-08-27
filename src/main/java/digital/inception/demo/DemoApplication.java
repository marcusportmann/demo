package digital.inception.demo;

// ~--- non-JDK imports --------------------------------------------------------

import digital.inception.application.Application;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

// ~--- JDK imports ------------------------------------------------------------

/**
 * The <code>DemoApplication</code> provides the implementation of the Inception Framework
 * application class for the Demo application.
 */
@SpringBootApplication
@ComponentScan(
    basePackages = {"digital.inception.demo"})
@EnableJpaRepositories(
    entityManagerFactoryRef = "applicationPersistenceUnit",
    basePackages = {"digital.inception.demo"})
public class DemoApplication extends Application {

  /* Logger */
  private static final Logger logger = LoggerFactory.getLogger(DemoApplication.class);

  /**
   * Constructs a new <code>DemoApplication</code>.
   *
   * @param applicationContext the Spring application context
   */
  public DemoApplication(
      ApplicationContext applicationContext) {
    super(applicationContext);
  }

  /**
   * The main method.
   *
   * @param args the command-line arguments
   */
  public static void main(String[] args) {
    SpringApplication.run(DemoApplication.class, args);
  }
}