resource "aws_acm_certificate" "cert" {
  domain_name               = "jaredkominsky.com"
  validation_method         = "DNS"
  subject_alternative_names = ["www.jaredkominsky.com"]


  lifecycle {
    create_before_destroy = true
  }
  tags = {
    Project = "Personal Portfolio"
  }

}
